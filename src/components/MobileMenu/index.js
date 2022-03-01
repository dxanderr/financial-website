import React from 'react';
import {
    MobileMenuContainer,
    Icon,
    CloseIcon,
    MobileMenuWrapper,
    Menu,
    MobileMenuLink,
    MobileMenuBtnWrap,
    MobileRoute
} from './MobileMenuElements';

const MobileMenu = ({isOpen, toggle}) => {
    return (
        <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileMenuWrapper>
                <Menu>
                    <MobileMenuLink to="about" onClick={toggle}>
                        About
                    </MobileMenuLink>
                    <MobileMenuLink to="discover" onClick={toggle}>
                        Discover
                    </MobileMenuLink>
                    <MobileMenuLink to="services" onClick={toggle}>
                        Services
                    </MobileMenuLink>
                    <MobileMenuLink to="signup" onClick={toggle}>
                        Sign Up
                    </MobileMenuLink>
                </Menu>
                <MobileMenuBtnWrap>
                    <MobileRoute to="/signin">Sign In</MobileRoute>
                </MobileMenuBtnWrap>
            </MobileMenuWrapper>
            
        </MobileMenuContainer>
    )
}

export default MobileMenu