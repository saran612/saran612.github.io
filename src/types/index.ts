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

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  image: string;
  dataAiHint: string;
  verifyUrl?: string;
};
