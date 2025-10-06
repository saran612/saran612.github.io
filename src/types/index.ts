export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};
