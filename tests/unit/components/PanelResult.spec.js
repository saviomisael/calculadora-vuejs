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
})
