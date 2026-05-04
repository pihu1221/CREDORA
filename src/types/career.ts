
export type CareerField = 'Engineer' | 'Finance' | 'Medical' | 'Bank' | 'Civil Service';

export interface Topic {
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  title: string;
  questions: AssessmentQuestion[];
}

export interface Lecture {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'interactive';
  contentUrl?: string;
  youtubeVideoId?: string;
}

export interface AssessmentQuestion {
  id: string;
  text: string;
  codeSnippet?: string | null;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  solutionAnalysis?: string;
  writtenSolution?: string;
  youtubeSearchQuery?: string;
}

export interface CareerPath {
  field: CareerField;
  description: string;
  topics: Topic[];
}
