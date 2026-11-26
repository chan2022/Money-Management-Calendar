export interface ExpenseCategory {
  id: string;
  name: string;
  color: string;
}

export const DEFAULT_CATEGORIES: ExpenseCategory[] = [
  { id: 'groceries', name: 'Groceries', color: '#FFD1DC' },
  { id: 'eating-out', name: 'Eating Out', color: '#FFE5B4' },
  { id: 'living', name: 'Living', color: '#FFD8A8' },
  { id: 'health-insurance', name: 'Health & Insurance', color: '#FFF3B0' },
  { id: 'shopping', name: 'Shopping', color: '#C7F0C2' },
  { id: 'travel-fun', name: 'Travel & Fun', color: '#BDE0FE' },
  { id: 'transport', name: 'Transport', color: '#CDB4DB' },
  { id: 'vehicle', name: 'Vehicle', color: '#E0BBE4' },
  { id: 'education', name: 'Education', color: '#F7C6C7' },
  { id: 'other', name: 'Other', color: '#E5E5E5' }
];