import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'; // make sure you have Bootstrap CSS imported

export default function Home() {
  return (
    <div className="container text-center my-5">
      {/* <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>HOMEPAGE</h1> <br /><br /> */}
      <p className="mb-4" style={{ fontSize: '4rem', fontWeight: 'bold' }}>
        Link with current students to <br />secure a place to stay
      </p>
      <br /><br /><br /><br /><br /><br />

      <p className="mb-4" style={{ fontSize: '3rem', fontFamily: '-moz-initial'}}>
        Find a match to hosts willing to welcome you<br /> into their homes, tailored to your needs and <br />preferences
      </p>
      < br />< br />

      <Link href="/profile" passHref>
        <button className="btn btn-outline-success" style={{ fontSize: '1.75rem'}}>Get Started</button> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br />

      </Link>
    </div>
  );
}
