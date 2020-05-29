export interface Transaction {
  id: string;
  title: string;
  description: string;
  type: 'income' | 'outcome';
  value: number;
}