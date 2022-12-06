import Link from 'next/link'

const SuccessPage = () => {
  return (
    <div>
      <span>✅</span>
      <h1>Success!</h1>
      <p>Thanks for your purchase!</p>

      <Link href="/">
        <button type="button">Go back to the store</button>
      </Link>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        span {
          font-size: 5rem;
          padding: 1.5rem;
        }

        h1 {
          font-size: 2rem;
          margin: 0.5rem 0;
        }

        p {
          font-size: 1.5rem;
          margin: 0.5rem 0;
        }

        button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          background-color: #000;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default SuccessPage
