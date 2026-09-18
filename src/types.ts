export type AgeGroup = 'Kids (6-12)' | 'Teens (13-17)' | 'Adults (18+)' | 'Family Squad';

export interface RegistrationFormData {
  fullName: string;
  email?: string;
  phoneNumber: string;
  numberOfParticipants: number;
  city?: string;
  whatsappNumber?: string;
  sameAsMobile?: boolean;
  ageGroup?: AgeGroup;
  notes?: string;
}

export interface RegistrationRecord extends RegistrationFormData {
  id: string;
  passCode: string;
  registeredAt: string;
  status: 'CONFIRMED' | 'PENDING';
  eventDate: string;
  venue: string;
}

export interface HighlightItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  kanji: string;
  tags: string[];
}

export interface ActivityFeature {
  id: string;
  title: string;
  japaneseTitle: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  badge: string;
}
