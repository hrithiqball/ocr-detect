import { useRouteError } from 'react-router-dom'

type ErrorWithMessage = {
  message: string
}

type ErrorWithStatusText = {
  statusText: string
}

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return typeof error === 'object' && error !== null && 'message' in error
}

const isErrorWithStatusText = (error: unknown): error is ErrorWithStatusText => {
  return typeof error === 'object' && error !== null && 'statusText' in error
}

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>
          {isErrorWithStatusText(error)
            ? error.statusText
            : isErrorWithMessage(error)
            ? error.message
            : 'Unknown error'}
        </i>
      </p>
    </div>
  )
}

export default ErrorPage
