import { FileText, Lightbulb, NotebookPen, Sparkles } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import Card from "../../components/Card";

const HowItWorksSection = () => {
  return (
    <section className='bg-base-100 min-h-[80vh] w-full'>
      <div className='container py-18 space-y-10'>
        {/* Section Header */}
        <SectionHeader
          heading='How It Works'
          subHeading='Your Lesson Plan in 3 Easy Steps'
          description='From initial idea to a polished, ready-to-teach plan, our streamlined process makes lesson plan creation intuitive and fast.'
        />
        {/* 3 step cards  */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Card
            icon={<FileText className='size-6 md:size-8' />}
            title='1. Input Your Details'
            description='Start with your lesson topic, grade level, and core objectives. Provide as much or as little detail as you like.'
          />

          <Card
            icon={<Lightbulb className='size-6 md:size-8' />}
            title='2. Generate with AI'
            description='With one click, our AI analyzes your inputs to draft a detailed, engaging, and well-structured lesson plan in seconds.'
          />

          <Card
            icon={<NotebookPen className='size-6 md:size-8' />}
            title='3. Customize & Export'
            description='Review the AI-generated plan, easily make edits to fit your teaching style, and then export it to your preferred format.'
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
