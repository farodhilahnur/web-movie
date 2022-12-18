import { Button as ButtonBootstrap } from 'react-bootstrap';


export default function Button({ children, onClick, className }) {

  return (
    <>
      <style type="text/css">
        {`
        .btn-primary {
          background-color: rgba(73,69,255);
          color: white;
        }
        .btn-primary:hover {
          background-color: rgba(73,69,255,0.9);
          color: white;
        }
    
        
    
        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
      </style>


      <ButtonBootstrap className={className} variant='primary' onClick={onClick}>
        {children}
      </ButtonBootstrap>
    </>
  )
}