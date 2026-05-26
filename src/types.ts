export interface ConsultationFormData {
  name: string;
  phone: string;
  location: string;
  serviceType: string;
  details: string;
  agreePrivacy: boolean;
}

export interface ConsultationRecord extends ConsultationFormData {
  id: string;
  createdAt: string;
  status: 'pending' | 'completed' | 'contacted';
}

export interface EstimatorConfig {
  apartmentSize: number; // in pyung (e.g., 24, 32, 40)
  windowType: 'premium' | 'standard' | 'basic';
  glassType: 'double' | 'low-e' | 'triple';
  selectedOptionCount: number;
}

export interface ConstructionCase {
  id: string;
  title: string;
  subTitle: string;
  location: string;
  category: 'Apartment' | 'Commercial' | 'Remodeling';
  imageUrl: string;
  specs: {
    frame: string;
    glass: string;
    period: string;
  };
}
