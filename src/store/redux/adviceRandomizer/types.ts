export interface AdviceRandomizerSliceState {
  advices: string[],
  error?: string | undefined,
  status: 'default' | 'loading' | 'success' | 'error'
}
