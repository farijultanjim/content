import React, { useState, useRef } from "react";
import {
  X,
  Plus,
  Zap,
  Image,
  Video,
  Mic,
  ArrowUp,
  Loader2,
  Trash,
} from "lucide-react";

const ChatModal = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [uploadingFiles, setUploadingFiles] = useState(new Set());
  const [selectedType, setSelectedType] = useState("image");
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);

    selectedFiles.forEach((file) => {
      const fileId = Math.random().toString(36).substr(2, 9);
      const fileWithId = { ...file, id: fileId };

      setUploadingFiles((prev) => new Set([...prev, fileId]));

      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFiles((prev) => [
            ...prev,
            {
              id: fileId,
              name: file.name,
              type: file.type,
              url: e.target.result,
              file: fileWithId,
            },
          ]);
          setUploadingFiles((prev) => {
            const newSet = new Set(prev);
            newSet.delete(fileId);
            return newSet;
          });
        };
        reader.readAsDataURL(file);
      }, 1500);
    });
  };

  const removeFile = (fileId) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
    setUploadingFiles((prev) => {
      const newSet = new Set(prev);
      newSet.delete(fileId);
      return newSet;
    });
  };

  const handleSubmit = () => {
    if (message.trim() || files.length > 0) {
      console.log("Sending message:", message);
      console.log("With files:", files);
      setMessage("");
      setFiles([]);
      setUploadingFiles(new Set());
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#e8e8e8]">
      <div className="bg-[#f0f0f0] rounded-[28px] w-full max-w-md mx-auto shadow-xl shadow-[#d4d4d4]">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <button className="w-6 h-6 flex items-center justify-center bg-[#e8e8e8] rounded-md">
            <X size={16} color="#2f2f2f" />
          </button>
          <h2 className="text-sm font-semibold text-[#2f2f2f]">Drafts</h2>
        </div>

        {(files.length > 0 || uploadingFiles.size > 0) && (
          <div className="px-4">
            <div className="flex gap-2 overflow-x-auto pb-2 flex-nowrap">
              {/* Uploaded files */}
              {files.map((file) => (
                <div key={file.id} className="relative flex-shrink-0 group">
                  <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden relative">
                    {file.type.startsWith("image/") ? (
                      <img
                        src={file.url}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#e8e8e8]">
                        <Video size={24} color="#666" />
                      </div>
                    )}
                    {/* Hover Trash Icon */}
                    <div
                      onClick={() => removeFile(file.id)}
                      className="absolute inset-0 bg-red-300/40 hover:opacity-100 opacity-0 transition-opacity rounded-2xl flex items-center justify-center cursor-pointer group-hover:opacity-100"
                    >
                      <Trash size={20} className="text-red-500" />
                    </div>
                  </div>
                </div>
              ))}

              {/* Uploading spinners */}
              {Array.from(uploadingFiles).map((fileId) => (
                <div key={fileId} className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-300 bg-opacity-20 rounded-2xl flex items-center justify-center">
                      <Loader2 size={16} className="animate-spin" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="px-4">
          <div className="mt-4 mb-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="write your prompt here..."
              className="w-full h-22 resize-none border-none outline-none text-[#2f2f2f] placeholder-gray-500 text-sm leading-relaxed"
            />
          </div>
        </div>

        {/* Bottom Action Area */}
        <div className="p-2">
          <div className="bg-[#e9e9e9] rounded-[20px] p-2 border border-zinc-300 border-opacity-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Plus Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-10 h-10 bg-[#eeeeee] rounded-xl flex items-center justify-center hover:bg-[#e8e8e8] transition-colors shadow-sm inset-shadow-sm inset-shadow-[#f4f4f4] cursor-pointer"
                >
                  <Plus size={22} color="#2f2f2f" />
                </button>

                {/* Zap Button */}
                <button className="w-10 h-10 bg-[#eeeeee] rounded-xl flex items-center justify-center hover:bg-[#e8e8e8] transition-colors shadow-sm inset-shadow-sm inset-shadow-[#f4f4f4] cursor-pointer">
                  <Zap size={20} color="#2f2f2f" />
                </button>

                {/* Image/Video Toggle */}
                <div className="w-auto h-10 bg-[#eeeeee] rounded-xl flex items-center shadow-sm inset-shadow-sm inset-shadow-[#f4f4f4] p-1">
                  <button
                    onClick={() => setSelectedType("image")}
                    className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer ${
                      selectedType === "image" ? "bg-[#e3e3e3]" : ""
                    }`}
                  >
                    <Image
                      size={16}
                      color={selectedType === "image" ? "#2f2f2f" : "#6f6f6f"}
                    />
                    <span
                      className={`text-sm font-medium ${
                        selectedType === "image"
                          ? "text-[#2f2f2f]"
                          : "text-[#6f6f6f]"
                      }`}
                    >
                      Image
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedType("video")}
                    className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer ${
                      selectedType === "video" ? "bg-[#e3e3e3]" : ""
                    }`}
                  >
                    <Video
                      size={16}
                      color={selectedType === "video" ? "#2f2f2f" : "#6f6f6f"}
                    />
                    <span
                      className={`text-sm font-medium ${
                        selectedType === "video"
                          ? "text-[#2f2f2f]"
                          : "text-[#6f6f6f]"
                      }`}
                    >
                      Video
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="w-8 h-10 flex items-center justify-center cursor-pointer">
                  <Mic size={20} color="#2f2f2f" />
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!message.trim() && files.length === 0}
                  className="w-10 h-10 bg-[#2d2d2d] rounded-xl flex items-center justify-center hover:bg-[#414242] transition-colors shadow-sm inset-shadow-sm inset-shadow-[#7d7d7d] cursor-pointer"
                >
                  <ArrowUp size={20} color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ChatModal;
