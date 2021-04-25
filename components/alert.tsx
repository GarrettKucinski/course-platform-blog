import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div>
      <Container>
        <div>
          {preview && (
            <>
              This page is a preview.{' '}
              <a href="/api/exit-preview">
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
