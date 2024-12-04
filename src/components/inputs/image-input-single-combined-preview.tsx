import { Pencil, TrashIcon } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';


export enum BoxFit {
  Cover = 'object-cover',
  Contain = 'object-contain',
  Fill = 'object-fill',
  None = 'object-none',
  ScaleDown = 'object-scale-down',
}

interface FileInputProps {
  imageSrc: string | null;
  className?: string | undefined;
  imageUrl?: string | null;
  placeholder?: string | null;
  imageFile: string;
  accept?: string;
  boxFit?: BoxFit;
  onFileChange: (file: File | null) => void;
}

const ImageInputSingleCombinedPreview: React.FC<FileInputProps> = ({ imageSrc, accept = ".pdf,.jpg,.jpeg,.png", imageUrl = null, imageFile, className, placeholder, boxFit = "object-contain", onFileChange }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onFileChange(file);
  };

  const onImageDelete = () => {
    console.log('triggering...');
    onFileChange(null);
    console.log(imageUrl);
  };

  return (
    <div className=" relative rounded-lg border-dashed border border-zinc-500  ">

      <span className={cn(className, ' aspect-square text-foreground/70 text-sm font-[300] flex justify-center items-center gap-2')}>
        {
          imageSrc
            ? <div className="flex h-full relative group">

              <img className={cn(`rounded-md ${boxFit}`)} src={imageSrc} alt={imageFile} ></img>
              <div className="cursor-default absolute bg-muted/50 w-full h-full flex flex-row justify-center items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <TrashIcon onClick={onImageDelete} className="cursor-pointer w-5 h-5" />
              </div>

            </div>
            : <div className='  '>
              {placeholder && <span className="text-center text-xs">{placeholder}</span>}
              <div className="absolute -bottom-2 bg-secondary hover:bg-secondary -right-2 shadow-md cursor-pointer p-2  rounded-full">
                <label className="flex justify-center items-center w-full cursor-pointer gap-2">
                  <div className=" rounded-full    shadow-none">
                    <Pencil className="size-4" />
                  </div>
                  <Input
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    className="text-gray-500 cursor-pointer hidden" // Hide native file input, we will style it
                  />


                </label>

              </div>

            </div>
        }
      </span>
    </div>
  );
};

export default ImageInputSingleCombinedPreview;
