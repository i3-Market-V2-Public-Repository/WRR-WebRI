import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Nav, Navbar } from 'react-bootstrap';
import { Bell, PersonCircle } from 'react-bootstrap-icons';
import useUser from '/lib/user.js';

import Breadcrumbs from 'nextjs-breadcrumbs';

export default
function Layout(props) {
    const { className, children, noRedirect, noBreadcrumbs } = props;
    const user = useUser(noRedirect);
    const router = useRouter();

    return (
        <div className="d-flex flex-column vw-100 vh-100">
            <Head>
                <title>i3-Market Web-RI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>

            <header>
                <Navbar className="px-5" expand="md">
                    <Link href="/" passHref>
                        <Navbar.Brand>
                            <Image height={55} width={115} src="/img/WEB-RI_logo.png" alt="Web-ri logo" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: '100%' }}
                            defaultActiveKey={router.pathname}
                        >
                            {/*{ user ? (<>*/}
                            {/*    { user.isProvider() ? (*/}
                            {/*        <Link href="/offerings" passHref>*/}
                            {/*            <Nav.Link>Offerings</Nav.Link>*/}
                            {/*        </Link>*/}
                            {/*    ) : null }*/}
                            {/*    <Link href="/contracts" passHref>*/}
                            {/*        <Nav.Link>Contracts</Nav.Link>*/}
                            {/*    </Link>*/}
                            {/*    <Link href="/transactions" passHref>*/}
                            {/*        <Nav.Link>Transactions</Nav.Link>*/}
                            {/*    </Link>*/}
                            {/*    <Link href="/search" passHref>*/}
                            {/*        <Nav.Link>Search</Nav.Link>*/}
                            {/*    </Link>*/}
                            {/*    <Link href="/alerts" passHref>*/}
                            {/*        <Nav.Link>Alerts</Nav.Link>*/}
                            {/*    </Link>*/}
                            {/*    <Link href="/account" passHref>*/}
                            {/*        <Nav.Link className="px-2">*/}
                            {/*            <PersonCircle size={24} />*/}
                            {/*        </Nav.Link>*/}
                            {/*    </Link>*/}
                            {/*    <Link href="/notificationCenter" passHref>*/}
                            {/*        <Nav.Link className="px-2">*/}
                            {/*            <Bell size={24} />*/}
                            {/*        </Nav.Link>*/}
                            {/*    </Link>*/}
                            {/*</>) : null }*/}

                            <Link href="/offerings" passHref>
                                <Nav.Link>Offerings</Nav.Link>
                            </Link>
                            <Link href="/contracts" passHref>
                                <Nav.Link>Contracts</Nav.Link>
                            </Link>
                            <Link href="/transactions" passHref>
                                <Nav.Link>Transactions</Nav.Link>
                            </Link>
                            <Link href="/search" passHref>
                                <Nav.Link>Search</Nav.Link>
                            </Link>
                            <Link href="/alerts" passHref>
                                <Nav.Link>Alerts</Nav.Link>
                            </Link>
                            <Link href="/account" passHref>
                                <Nav.Link className="px-2">
                                    <PersonCircle size={24} />
                                </Nav.Link>
                            </Link>
                            <Link href="/notificationCenter" passHref>
                                <Nav.Link className="px-2">
                                    <Bell size={24} />
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>

            <div className="flex-grow-1 overflow-scroll d-flex flex-column">
                <main className={(className || '') + ' flex-grow-1'}>
                    { noBreadcrumbs ? null : (
                        <div className="px-5 breadcrumbs py-4 pb-5">
                            <Breadcrumbs rootLabel="Home" />
                        </div>
                    ) }

                    { children }
                </main>

                <footer className="px-5 py-4">
                    <div className="d-flex h-100 align-items-center">
                        <Image height="36" width="54" src="/img/EU_flag.png" alt="EU flag" />

                        <div className="ml-3 flex-grow-1">
                            <small className="d-inline-block" style={{ maxWidth: '460px' }} >
                            i3-Market has received funding from the European Union&apos;s Horizon 2020
                            research and innovation programme under grant agreement no. 871754
                            </small>
                        </div>

                        {/*<small className="ml-3 mr-4">Privacy Policy</small>*/}
                         <a target="_blank" href="https://www.i3-market.eu/">
                            <Image height="48" width="61" src="/img/i3_market_logo.png" alt="i3Market logo" style={{cursor: "pointer"}} />
                        </a>

                    </div>
                </footer>
            </div>
        </div>);
}
