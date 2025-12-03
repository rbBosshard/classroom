/**
 * Big Data Types
 */

export interface InteractiveContent {
  type: 'iframe' | 'h5p';
  url: string;
  title?: string;
  height?: string;
  allowFullscreen?: boolean;
}

export interface BigDataExample {
  title: string;
  description: string;
  volume?: string;
  velocity?: string;
  variety?: string;
}

export interface DataStorageMethod {
  name: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  useCases: string[];
}

export interface AnalysisMethod {
  name: string;
  description: string;
  tools: string[];
  applications: string[];
}

export interface EthicalAspect {
  topic: string;
  description: string;
  concerns: string[];
  guidelines: string[];
}
