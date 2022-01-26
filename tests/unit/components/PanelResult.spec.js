import { render } from '@testing-library/vue'
import PanelResult from '../../../src/components/PanelResult'

describe('PanelResult component', () => {
  it('should render formula when formula is a empty string', () => {
    const { getByTestId } = render(PanelResult, {
      props: {
        formula: '',
      },
    })

    expect(getByTestId('formula').textContent).toBe('')
  })

  it('should render formula with a smaller font size when result is truthy', () => {
    const { getByTestId } = render(PanelResult, {
      props: {
        formula: '1 + 2=',
        result: '3',
      },
    })

    expect(getByTestId('formula')).toHaveClass('panel-result__formula--small')
  })

  it('should trunc result when result ends with comma', () => {
    const { getByTestId } = render(PanelResult, {
      props: {
        formula: '10. + 1=',
        result: '11.',
      },
    })

    expect(getByTestId('result').textContent).toBe('11')
  })
})
