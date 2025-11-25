export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  availability: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppointmentType {
  Checkup = 'Checkup',
  Consultation = 'Consultation',
  Emergency = 'Emergency',
  FollowUp = 'FollowUp'
}