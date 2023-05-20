import { Oval } from 'react-loader-spinner'
import { ovalSpinner } from '../../constants/constants'

const Spinner = (): JSX.Element => {
  return (
    <div className='spinner'>
      <Oval
        height={ovalSpinner.height}
        width={ovalSpinner.width}
        color={ovalSpinner.color}
        visible
        ariaLabel={ovalSpinner.ariaLabel}
        secondaryColor={ovalSpinner.secondaryColor}
        strokeWidth={ovalSpinner.strokeWidth}
        strokeWidthSecondary={ovalSpinner.strokeWidthSecondary}
      />
    </div>
  )
}

export default Spinner
