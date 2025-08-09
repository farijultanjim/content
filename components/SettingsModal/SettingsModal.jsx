import React, { useState } from "react";
import {
  Settings,
  User,
  Shield,
  Bell,
  CreditCard,
  Edit2,
  ChevronDown,
} from "lucide-react";

const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("General");
  const [settings, setSettings] = useState({
    username: "farijul_tanjim",
    email: "farijultanjim@gmail.com",
    autoPromptSuggestion: true,
    autoPlayVideo: true,
    publishToExplore: false,
    language: "Auto detect",
  });
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languageOptions = [
    "Auto detect",
    "English",
    "Spanish",
  ];

  const tabs = [
    { id: "General", label: "General", icon: Settings },
    { id: "Profile", label: "Profile", icon: User },
    { id: "Security", label: "Security", icon: Shield },
    { id: "Notifications", label: "Notifications", icon: Bell },
    { id: "Subscription", label: "Subscription", icon: CreditCard },
  ];

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <Settings className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-tr from-blue-50 via-red-50  to-purple-100 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-4xl shadow-sm border border-gray-100 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex h-[600px]">
          {/* Sidebar */}
          <div className="w-80 bg-white p-4 border-r border-gray-100">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-left transition-colors cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#f1f1f1] text-gray-900 "
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="h-full overflow-y-auto">
              <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                {activeTab}
              </h1>

              {activeTab === "General" && (
                <div className="space-y-8">
                  {/* Username */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Username
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{settings.username}</span>
                      <button className="cursor-pointer hover:text-slate-600">
                        <Edit2 className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Email
                      </label>
                    </div>
                    <div className="text-gray-400">{settings.email}</div>
                  </div>

                  {/* Enable auto-prompt idea suggestion */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Enable auto-prompt idea suggestion
                      </label>
                    </div>
                    <button
                      onClick={() => toggleSetting("autoPromptSuggestion")}
                      className={`relative inline-flex h-7 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        settings.autoPromptSuggestion
                          ? "bg-slate-600"
                          : "bg-slate-200 inset-shadow-2xs inset-shadow-[#f4f4f4] "
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-xs ${
                          settings.autoPromptSuggestion
                            ? "translate-x-5"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Auto-play video on Explore */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Auto-play video on Explore
                      </label>
                    </div>
                    <button
                      onClick={() => toggleSetting("autoPlayVideo")}
                      className={`relative inline-flex h-7 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        settings.autoPlayVideo ? "bg-slate-600" : "bg-slate-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                          settings.autoPlayVideo
                            ? "translate-x-5"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Publish to Explore */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Publish to Explore
                      </label>
                    </div>
                    <button
                      onClick={() => toggleSetting("publishToExplore")}
                      className={`relative inline-flex h-7 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        settings.publishToExplore
                          ? "bg-slate-600"
                          : "bg-slate-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                          settings.publishToExplore
                            ? "translate-x-5"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Language */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Language
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                        }
                        className="flex items-center justify-between bg-[#f1f1f1] border border-gray-200 rounded-lg px-4 py-2 min-w-[140px] text-gray-800 font-medium  transition-colors cursor-pointer gap-2"
                      >
                        <span>{settings.language}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                            isLanguageDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isLanguageDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                          {languageOptions.map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                setSettings((prev) => ({
                                  ...prev,
                                  language: option,
                                }));
                                setIsLanguageDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer ${
                                settings.language === option
                                  ? "bg-gray-50 text-gray-900 font-medium"
                                  : "text-gray-600"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Profile" && (
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Profile settings and personal information management.
                  </p>
                </div>
              )}

              {activeTab === "Security" && (
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Security settings, password management, and two-factor
                    authentication.
                  </p>
                </div>
              )}

              {activeTab === "Notifications" && (
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Manage your notification preferences and communication
                    settings.
                  </p>
                </div>
              )}

              {activeTab === "Subscription" && (
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Billing information, subscription plans, and payment
                    methods.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
