
import { Copy, Image as ImageIcon, Globe, LayoutDashboard, Compass, FileText, Bot, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/components/ui/use-toast";
import ServiceCard from "@/components/ui/service-card";
import SectionHeading from "@/components/ui/section-heading";

const DashboardStyleGuide = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard",
    });
  };

  return (
    <DashboardLayout title="Style Guide" subtitle="Design system and branding guidelines">
      <Tabs defaultValue="typography">
        <TabsList className="grid grid-cols-5 mb-8 w-full max-w-3xl">
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="icons">Icons</TabsTrigger>
        </TabsList>

        {/* Typography Section */}
        <TabsContent value="typography">
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-4">Font Families</h3>
              <div className="space-y-6">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-montserrat text-xl">Montserrat</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="font-montserrat"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> font-montserrat
                    </Button>
                  </div>
                  <p className="text-futurity-gray text-sm">Primary font used for headings and emphasis</p>
                  <p className="font-montserrat mt-3">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-sans text-xl">Inter</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="font-sans"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> font-sans
                    </Button>
                  </div>
                  <p className="text-futurity-gray text-sm">Secondary font used for body text</p>
                  <p className="font-sans mt-3">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Heading Styles</h3>
              <div className="space-y-6">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h1 className="text-5xl font-montserrat font-bold">Heading 1</h1>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> Copy
                    </Button>
                  </div>
                  <p className="text-futurity-gray text-sm">Used for main page headings</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-montserrat font-bold">Heading 2</h2>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="text-3xl font-montserrat font-bold"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> Copy
                    </Button>
                  </div>
                  <p className="text-futurity-gray text-sm">Used for section headings</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-montserrat font-semibold">Heading 3</h3>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="text-2xl font-montserrat font-semibold"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> Copy
                    </Button>
                  </div>
                  <p className="text-futurity-gray text-sm">Used for subsection headings</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-montserrat font-semibold">Heading 4</h4>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="text-xl font-montserrat font-semibold"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> Copy
                    </Button>
                  </div>
                  <p className="text-futurity-gray text-sm">Used for card titles and smaller sections</p>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Body Text</h3>
              <div className="space-y-6">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-lg">Large Body Text</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="text-lg"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> Copy
                    </Button>
                  </div>
                  <p className="text-lg mt-2">
                    The quick brown fox jumps over the lazy dog. This text style is used for emphasis within paragraphs or for larger body text.
                  </p>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-base">Standard Body Text</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="text-base"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> Copy
                    </Button>
                  </div>
                  <p className="text-base mt-2">
                    The quick brown fox jumps over the lazy dog. This is the default text size used throughout the website for regular body content.
                  </p>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm">Small Body Text</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard('className="text-sm"')}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Copy size={14} /> Copy
                    </Button>
                  </div>
                  <p className="text-sm mt-2">
                    The quick brown fox jumps over the lazy dog. This smaller text size is used for captions, footnotes, and supplementary information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Colors Section */}
        <TabsContent value="colors">
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-4">Primary Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-futurity-blue"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Futurity Blue</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-futurity-blue')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#0A1840</p>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-futurity-blue-light"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Futurity Blue Light</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-futurity-blue-light')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#425089</p>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-futurity-orange"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Futurity Orange</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-futurity-orange')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#F97316</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Secondary Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-futurity-orange-light"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Futurity Orange Light</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-futurity-orange-light')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#FFEAD5</p>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-futurity-gray"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Futurity Gray</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-futurity-gray')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#8E9196</p>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-futurity-gray-light"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Futurity Gray Light</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-futurity-gray-light')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#EDF1FC</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">UI Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-white"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">White</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-white')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#FFFFFF</p>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-gray-50"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Background Gray</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-gray-50')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#F9FAFB</p>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <div className="h-24 bg-black"></div>
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Black</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => copyToClipboard('bg-black')}
                        className="flex items-center gap-1 text-xs"
                      >
                        <Copy size={14} /> Copy
                      </Button>
                    </div>
                    <p className="text-sm text-futurity-gray">#000000</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Color Usage Guidelines</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>General Color Usage</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use Futurity Blue as the primary brand color for headers, navigation elements, and CTAs.</li>
                      <li>Use Futurity Orange as an accent color for highlights, important buttons, and interactive elements.</li>
                      <li>Use Futurity Gray for secondary text and subtle UI elements.</li>
                      <li>Maintain proper contrast ratios (4.5:1 minimum) for text readability.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Color Combinations</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-futurity-blue text-white rounded-md">
                        <p className="font-medium">Blue background with white text</p>
                        <p className="text-sm mt-1">Primary UI combination for high contrast sections</p>
                      </div>
                      
                      <div className="p-4 bg-white border border-futurity-blue text-futurity-blue rounded-md">
                        <p className="font-medium">White background with blue text</p>
                        <p className="text-sm mt-1 text-futurity-blue">Standard content sections</p>
                      </div>
                      
                      <div className="p-4 bg-futurity-orange text-white rounded-md">
                        <p className="font-medium">Orange background with white text</p>
                        <p className="text-sm mt-1">For call to action and highlight elements</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Components Section */}
        <TabsContent value="components">
          <Card>
            <CardHeader>
              <CardTitle>UI Components</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-4">Buttons</h3>
              <div className="space-y-6">
                <div className="border rounded-md p-6">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <Button>Default Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="destructive">Destructive Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="link">Link Button</Button>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyToClipboard('<Button>Default Button</Button>\n<Button variant="outline">Outline Button</Button>\n<Button variant="secondary">Secondary Button</Button>\n<Button variant="destructive">Destructive Button</Button>\n<Button variant="ghost">Ghost Button</Button>\n<Button variant="link">Link Button</Button>')}
                    className="flex items-center gap-1 text-xs mt-2"
                  >
                    <Copy size={14} /> Copy All Button Variants
                  </Button>
                </div>
                
                <div className="border rounded-md p-6">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <Button size="lg">Large Button</Button>
                    <Button>Default Size</Button>
                    <Button size="sm">Small Button</Button>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyToClipboard('<Button size="lg">Large Button</Button>\n<Button>Default Size</Button>\n<Button size="sm">Small Button</Button>')}
                    className="flex items-center gap-1 text-xs mt-2"
                  >
                    <Copy size={14} /> Copy Button Sizes
                  </Button>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <ServiceCard
                    icon={<Copy size={28} />}
                    title="Service Card"
                    description="Service offering with icon and details"
                    className="mb-4"
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyToClipboard('<ServiceCard\n  icon={<Icon size={28} />}\n  title="Service Title"\n  description="Service description text"\n/>')}
                    className="flex items-center gap-1 text-xs w-full mt-2"
                  >
                    <Copy size={14} /> Copy Service Card
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle>Standard Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This is a standard card component used throughout the site.</p>
                    </CardContent>
                  </Card>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyToClipboard('<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <p>Card content goes here</p>\n  </CardContent>\n</Card>')}
                    className="flex items-center gap-1 text-xs w-full"
                  >
                    <Copy size={14} /> Copy Standard Card
                  </Button>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Section Headings</h3>
              <div className="border rounded-md p-6">
                <div className="mb-4">
                  <div className="mb-8">
                    <SectionHeading 
                      title="Standard Section Heading" 
                      subtitle="This is how section headings appear throughout the website"
                    />
                  </div>
                  <div className="mb-8">
                    <SectionHeading 
                      title="Centered Section Heading" 
                      subtitle="This is a centered version of the section heading"
                      center
                    />
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => copyToClipboard('<SectionHeading\n  title="Section Title"\n  subtitle="Optional subtitle text"\n  center={false} // Set to true for centered heading\n/>')}
                  className="flex items-center gap-1 text-xs mt-2"
                >
                  <Copy size={14} /> Copy Section Heading
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spacing Section */}
        <TabsContent value="spacing">
          <Card>
            <CardHeader>
              <CardTitle>Spacing System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">Our spacing system is based on a 4px grid. The following utility classes can be used to maintain consistent spacing throughout the design:</p>
              
              <h3 className="text-lg font-medium mb-4">Margin & Padding Scale</h3>
              <div className="space-y-8">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-3">Padding Examples</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="p-0 bg-futurity-blue/10 border border-dashed border-futurity-blue flex items-center justify-center text-xs w-24 h-24">p-0</div>
                      <div className="p-1 bg-futurity-blue/10 border border-dashed border-futurity-blue flex items-center justify-center text-xs w-24 h-24">p-1</div>
                      <div className="p-2 bg-futurity-blue/10 border border-dashed border-futurity-blue flex items-center justify-center text-xs w-24 h-24">p-2</div>
                      <div className="p-4 bg-futurity-blue/10 border border-dashed border-futurity-blue flex items-center justify-center text-xs w-24 h-24">p-4</div>
                      <div className="p-6 bg-futurity-blue/10 border border-dashed border-futurity-blue flex items-center justify-center text-xs w-24 h-24">p-6</div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-3">Margin Examples</h4>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-futurity-orange/10 border border-dashed border-futurity-orange p-2">
                        <div className="bg-white py-2 px-4 mb-0 text-center text-xs">mb-0</div>
                      </div>
                      <div className="bg-futurity-orange/10 border border-dashed border-futurity-orange p-2">
                        <div className="bg-white py-2 px-4 mb-2 text-center text-xs">mb-2</div>
                      </div>
                      <div className="bg-futurity-orange/10 border border-dashed border-futurity-orange p-2">
                        <div className="bg-white py-2 px-4 mb-4 text-center text-xs">mb-4</div>
                      </div>
                      <div className="bg-futurity-orange/10 border border-dashed border-futurity-orange p-2">
                        <div className="bg-white py-2 px-4 mb-6 text-center text-xs">mb-6</div>
                      </div>
                      <div className="bg-futurity-orange/10 border border-dashed border-futurity-orange p-2">
                        <div className="bg-white py-2 px-4 mb-8 text-center text-xs">mb-8</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Gap & Spacing</h3>
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-3">Gap Examples</h4>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="border p-2 text-center text-sm">Gap 2 (0.5rem)</div>
                    <div className="border p-2 text-center text-sm">Item</div>
                    <div className="border p-2 text-center text-sm">Item</div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border p-2 text-center text-sm">Gap 4 (1rem)</div>
                    <div className="border p-2 text-center text-sm">Item</div>
                    <div className="border p-2 text-center text-sm">Item</div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Section Spacing</h3>
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-3">Section Class Examples</h4>
                <div className="space-y-4">
                  <div className="bg-futurity-blue/5 p-4 rounded-md">
                    <p className="font-mono text-sm mb-2">.section</p>
                    <p className="text-sm text-futurity-gray">Standard vertical padding for sections: py-12 md:py-16 lg:py-24</p>
                  </div>
                  <div className="bg-futurity-blue/5 p-4 rounded-md">
                    <p className="font-mono text-sm mb-2">.container-wide</p>
                    <p className="text-sm text-futurity-gray">Wide container with responsive padding: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8</p>
                  </div>
                  <div className="bg-futurity-blue/5 p-4 rounded-md">
                    <p className="font-mono text-sm mb-2">.container-tight</p>
                    <p className="text-sm text-futurity-gray">Narrow container with responsive padding: max-w-5xl mx-auto px-4 sm:px-6 lg:px-8</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Icons Section */}
        <TabsContent value="icons">
          <Card>
            <CardHeader>
              <CardTitle>Icons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">We use Lucide icons throughout the website. Here are some commonly used icons and how to implement them:</p>
              
              <h3 className="text-lg font-medium mb-4">Icon Usage Examples</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: <ImageIcon size={24} />, name: "Image" },
                  { icon: <Globe size={24} />, name: "Globe" },
                  { icon: <LayoutDashboard size={24} />, name: "LayoutDashboard" },
                  { icon: <Compass size={24} />, name: "Compass" },
                  { icon: <FileText size={24} />, name: "FileText" },
                  { icon: <Bot size={24} />, name: "Bot" },
                  { icon: <CheckCircle size={24} />, name: "CheckCircle" },
                  { icon: <MessageSquare size={24} />, name: "MessageSquare" }
                ].map((item, index) => (
                  <div key={index} className="border rounded-md p-4 flex flex-col items-center justify-center text-center">
                    <div className="text-futurity-blue mb-2">
                      {item.icon}
                    </div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => copyToClipboard(`import { ${item.name} } from "lucide-react";`)}
                      className="flex items-center gap-1 text-xs mt-2"
                    >
                      <Copy size={14} /> Copy
                    </Button>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-medium mb-4">Icon Sizing</h3>
              <div className="border rounded-md p-6">
                <div className="flex flex-wrap items-end gap-8 mb-4">
                  <div className="flex flex-col items-center">
                    <ImageIcon size={16} />
                    <span className="text-xs mt-2">size=16</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ImageIcon size={20} />
                    <span className="text-xs mt-2">size=20</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ImageIcon size={24} />
                    <span className="text-xs mt-2">size=24</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ImageIcon size={32} />
                    <span className="text-xs mt-2">size=32</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ImageIcon size={48} />
                    <span className="text-xs mt-2">size=48</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => copyToClipboard('<ImageIcon size={24} />')}
                  className="flex items-center gap-1 text-xs mt-2"
                >
                  <Copy size={14} /> Copy Icon Example
                </Button>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Icon with Background</h3>
              <div className="border rounded-md p-6">
                <div className="flex flex-wrap gap-6 mb-4">
                  <div className="h-16 w-16 rounded-full bg-futurity-orange/10 flex items-center justify-center text-futurity-orange">
                    <Globe size={28} />
                  </div>
                  <div className="h-16 w-16 rounded-full bg-futurity-blue/10 flex items-center justify-center text-futurity-blue">
                    <LayoutDashboard size={28} />
                  </div>
                  <div className="h-16 w-16 rounded-full bg-futurity-gray/10 flex items-center justify-center text-futurity-gray">
                    <Compass size={28} />
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => copyToClipboard('<div className="h-16 w-16 rounded-full bg-futurity-orange/10 flex items-center justify-center text-futurity-orange">\n  <Globe size={28} />\n</div>')}
                  className="flex items-center gap-1 text-xs mt-2"
                >
                  <Copy size={14} /> Copy Icon with Background
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default DashboardStyleGuide;
