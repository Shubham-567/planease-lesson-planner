import Input from "../../components/Input";
import { useState } from "react";
import {
  BookOpenText,
  Clock,
  Eye,
  Flag,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const InputForm = () => {
  // form inputs
  const [topic, setTopic] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [lessonDuration, setLessonDuration] = useState("");
  const [learningObjective, setLearningObjective] = useState("");

  const handleSubmit = () => {
    const formData = {
      topic,
      gradeLevel,
      subject,
      lessonDuration,
      learningObjective,
    };

    console.log(formData);

    setTopic("");
    setGradeLevel("");
    setSubject("");
    setLessonDuration("");
    setLearningObjective("");

    alert("Form submitted!");
  };

  return (
    <form
      action={handleSubmit}
      className='grid grid-cols-2 gap-4 bg-base-200 p-8 rounded-2xl ring ring-base-300 shadow-lg'>
      <div className='col-span-2'>
        <h3 className='text-sm font-bold font-serif bg-primary/10 text-primary inline px-4 py-1 rounded-full'>
          Provide Details
        </h3>
      </div>

      <div className='col-span-2'>
        <Input
          id='lessonTopic'
          label='Lesson Topic'
          placeholder='eg. The Solar System'
          Icon={BookOpenText}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <div className='col-span-1'>
        <Input
          id='gradeLevel'
          label='Grade Level'
          placeholder='eg. 5th grade'
          Icon={GraduationCap}
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
        />
      </div>

      <div className='col-span-1'>
        <Input
          id='subject'
          label='Subject'
          placeholder='eg. Science'
          Icon={Flag}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className='col-span-2'>
        <Input
          id='lessonDuration'
          label='Lesson Duration'
          placeholder='eg. 45 minutes'
          Icon={Clock}
          value={lessonDuration}
          onChange={(e) => setLessonDuration(e.target.value)}
        />
      </div>

      <div className='col-span-2'>
        <label
          htmlFor='learningObjective'
          className='block text-sm font-semibold tracking-wider text-neutral'>
          Learning Objective
        </label>
        <div className='relative'>
          <textarea
            id='learningObjective'
            placeholder='Enter what students should be able to do at the end of this lesson...'
            value={learningObjective}
            onChange={(e) => setLearningObjective(e.target.value)}
            className='bg-base-100 text-neutral mt-1 p-2 pl-10 ring ring-base-300  rounded-md focus:ring-2 focus:ring-primary outline-none block w-full min-h-20 max-h-40'
          />

          <Eye className='absolute top-5 left-3 -translate-y-1/2 text-neutral-muted/80 size-4' />
        </div>
      </div>

      <div className='col-span-2 flex justify-end mt-6'>
        <button type='submit' className='btn btn-primary'>
          <Sparkles className='size-5' />
          <span>Generate Plan</span>
        </button>
      </div>
    </form>
  );
};

export default InputForm;
