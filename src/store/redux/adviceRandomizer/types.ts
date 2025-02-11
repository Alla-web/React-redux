export interface AdviceRandomizerSliceState {
  advices: string[],
  error: any,
  status: 'default' | 'loading' | 'success' | 'error'
}
