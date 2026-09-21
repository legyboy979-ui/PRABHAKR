export type Language = 'hi' | 'en';

export type ServiceCategory = 'all' | 'jobs' | 'govt' | 'education' | 'banking' | 'cyber';

export interface ServiceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  category: ServiceCategory;
  officialUrl: string;
  badge?: string;
  badgeType?: 'urgent' | 'popular' | 'new' | 'free' | 'verified';
  iconName: string;
  accentColor: string;
  bgColor: string;
  requirements?: string[];
  estTimeHi?: string;
  estTimeEn?: string;
  govtFee?: string;
  centerFee?: string;
  tags: string[];
}

export interface SarkariAlert {
  id: string;
  titleHi: string;
  titleEn: string;
  tag: string;
  tagColor: 'red' | 'amber' | 'emerald' | 'blue' | 'purple';
  date: string;
  lastDate?: string;
  link: string;
  isNew?: boolean;
}

export interface DocumentGuide {
  id: string;
  titleHi: string;
  titleEn: string;
  category: string;
  iconName: string;
  processingDays: string;
  validity: string;
  officialPortalUrl: string;
  officialPortalName: string;
  requiredDocs: {
    nameHi: string;
    nameEn: string;
    isMandatory: boolean;
    note?: string;
  }[];
  stepsHi: string[];
  stepsEn: string[];
  importantTipsHi: string;
  importantTipsEn: string;
  govtFee: string;
  centerFee: string;
}

export interface PriceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  category: 'print' | 'card' | 'photo' | 'form' | 'certificate' | 'banking' | 'travel';
  price: number;
  unitHi: string;
  unitEn: string;
  descriptionHi: string;
  descriptionEn: string;
  popular?: boolean;
}

export interface ServiceRequest {
  fullName: string;
  mobile: string;
  village: string;
  serviceType: string;
  details: string;
  urgency: 'normal' | 'urgent' | 'immediate';
  preferredContact: 'whatsapp' | 'call';
}

export interface BioDataProfile {
  fullName: string;
  fatherName: string;
  motherName: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  category: string;
  religion: string;
  village: string;
  postOffice: string;
  policeStation: string;
  district: string;
  state: string;
  pincode: string;
  mobile: string;
  email: string;
  education10th: { school: string; board: string; year: string; percentage: string; div: string };
  education12th: { school: string; board: string; year: string; percentage: string; div: string };
  graduation: { college: string; university: string; year: string; percentage: string; course: string };
  otherQual: string;
  skills: string;
  experience: string;
  languages: string;
}
