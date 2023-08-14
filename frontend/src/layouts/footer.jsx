export default function Footer() {
    return (
      <div>
        <footer className='main-footer text-center'>
          <strong> Copyright ©{new Date().getFullYear()} <a href='https://adminlte.io'> AdminLTE.io</a>. </strong>
          &nbsp;All rights reserved.
        </footer>
      </div>
    );
  }