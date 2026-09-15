"use client";

import { useId, useRef, useState, type DragEvent } from "react";
import { cn } from "@/lib/utils";
import { PaperclipIcon, UploadCloudIcon, XIcon } from "../shared/icons";

interface FileDropzoneProps {
  name: string;
  className?: string;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function FileDropzone({ name, className }: FileDropzoneProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  function syncInputFiles(nextFiles: File[]) {
    const transfer = new DataTransfer();
    nextFiles.forEach((file) => transfer.items.add(file));
    if (inputRef.current) {
      inputRef.current.files = transfer.files;
    }
    setFiles(nextFiles);
  }

  function addFiles(list: FileList | null) {
    if (!list || list.length === 0) return;
    const merged = [...files, ...Array.from(list)];
    syncInputFiles(merged);
  }

  function removeFile(index: number) {
    syncInputFiles(files.filter((_, i) => i !== index));
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  }

  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={inputId} className="mb-2 block text-center font-raleway text-[14px] font-normal text-white">
        Fájl feltöltése <span className="text-white/45">(nem kötelező)</span>
      </label>
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") inputRef.current?.click();
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "flex w-full cursor-pointer flex-col items-center gap-2 rounded-[14px] border-2 border-dashed bg-pk-field/60 px-5 py-8 text-center transition-colors",
          isDragging ? "border-pk-gold bg-pk-gold/10" : "border-white/15 hover:border-pk-gold/60",
        )}
      >
        <UploadCloudIcon className="size-8 text-pk-gold" />
        <p className="font-raleway text-[14px] font-medium text-white/70">
          Húzza ide a fájlokat, vagy <span className="text-pk-gold underline">tallózzon</span>
        </p>
        <p className="font-raleway text-[12px] text-white/40">Nyomdai anyag, grafika vagy referencia — bármilyen formátum</p>
      </div>
      <input
        ref={inputRef}
        id={inputId}
        name={name}
        type="file"
        multiple
        className="sr-only"
        onChange={(event) => addFiles(event.target.files)}
      />
      {files.length > 0 ? (
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center gap-2 rounded-full bg-pk-field px-3 py-[6px] font-raleway text-[12.5px] text-white/70"
            >
              <PaperclipIcon className="size-[14px] shrink-0 text-pk-gold" />
              <span className="max-w-[160px] truncate">{file.name}</span>
              <span className="text-white/35">{formatFileSize(file.size)}</span>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  removeFile(index);
                }}
                aria-label={`${file.name} eltávolítása`}
                className="text-white/40 hover:text-pk-gold"
              >
                <XIcon className="size-[14px]" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
