import React from "react";

const Footer = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/tQ3CRT8/footer.png')] bg-cover">
            <footer className="flex flex-col md:flex-row gap-8 md:gap-5 md:justify-between p-10 lg:px-28">
                <div className="flex flex-col">
                    <span className="footer-title">Services</span>
                    <a href="/home" className="link link-hover">
                        Branding
                    </a>
                    <a href="/home" className="link link-hover">
                        Design
                    </a>
                    <a href="/home" className="link link-hover">
                        Advertisement
                    </a>
                    <a href="/home" className="link link-hover">
                        Marketing
                    </a>
                </div>
                <div className="flex flex-col">
                    <span className="footer-title">Company</span>
                    <a href="/home" className="link link-hover">
                        About us
                    </a>
                    <a href="/home" className="link link-hover">
                        Contact
                    </a>
                    <a href="/home" className="link link-hover">
                        Jobs
                    </a>
                    <a href="/home" className="link link-hover">
                        Press kit
                    </a>
                </div>
                <div className="flex flex-col">
                    <span className="footer-title">Legal</span>
                    <a href="/home" className="link link-hover">
                        Terms of use
                    </a>
                    <a href="/home" className="link link-hover">
                        Privacy policy
                    </a>
                    <a href="/home" className="link link-hover">
                        Cookie policy
                    </a>
                </div>
            </footer>
            <div className="text-center my-4">
                <p className="text-accent font-medium text-sm">
                    Copyright 2023 All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
