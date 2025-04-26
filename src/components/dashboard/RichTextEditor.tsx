
import { useRef, useState } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  ListOrdered, 
  Link, 
  Image as ImageIcon,
  Heading,
  Heading2,
  Heading3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const RichTextEditor = ({ value, onChange, className }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const handleCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    updateValue();
  };

  const updateValue = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInsertLink = () => {
    if (linkUrl) {
      document.execCommand('createLink', false, linkUrl);
      setShowLinkInput(false);
      setLinkUrl('');
      updateValue();
    }
  };

  const handleInsertImage = () => {
    if (imageUrl) {
      document.execCommand('insertHTML', false, 
        `<img src="${imageUrl}" alt="${imageAlt || 'Image'}" class="my-4 max-w-full h-auto" />`
      );
      setShowImageInput(false);
      setImageUrl('');
      setImageAlt('');
      updateValue();
    }
  };

  return (
    <div className={cn("border rounded-md flex flex-col", className)}>
      <div className="bg-gray-50 p-2 border-b flex flex-wrap items-center gap-1">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand('bold')}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand('italic')}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand('underline')}
          title="Underline"
        >
          <Underline className="h-4 w-4" />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-1" />
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand('formatBlock', '<h2>')}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand('formatBlock', '<h3>')}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand('insertOrderedList')}
          title="Ordered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-1" />
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowLinkInput(!showLinkInput)}
          title="Insert Link"
          className={showLinkInput ? "bg-gray-200" : ""}
        >
          <Link className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowImageInput(!showImageInput)}
          title="Insert Image"
          className={showImageInput ? "bg-gray-200" : ""}
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>
      
      {showLinkInput && (
        <div className="p-2 bg-gray-50 border-b flex items-center gap-2">
          <input
            type="url"
            placeholder="Enter link URL"
            className="flex-1 px-3 py-1 border rounded-md text-sm"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
          <Button size="sm" onClick={handleInsertLink}>Insert</Button>
          <Button size="sm" variant="ghost" onClick={() => setShowLinkInput(false)}>Cancel</Button>
        </div>
      )}
      
      {showImageInput && (
        <div className="p-2 bg-gray-50 border-b flex flex-col gap-2">
          <input
            type="url"
            placeholder="Enter image URL"
            className="w-full px-3 py-1 border rounded-md text-sm"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Alt text (optional)"
            className="w-full px-3 py-1 border rounded-md text-sm"
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
          />
          <div className="flex gap-2 justify-end">
            <Button size="sm" onClick={handleInsertImage}>Insert</Button>
            <Button size="sm" variant="ghost" onClick={() => setShowImageInput(false)}>Cancel</Button>
          </div>
        </div>
      )}
      
      <div
        ref={editorRef}
        className="p-4 min-h-[200px] prose prose-sm max-w-none overflow-auto"
        contentEditable
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={updateValue}
      />
    </div>
  );
};

export default RichTextEditor;
