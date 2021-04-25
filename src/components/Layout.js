import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './../context'
import Navigation from './Navigation'
import ScrollLock from 'react-scrolllock'
var scrollToElement = require('scroll-to-element')

function Layout(props) {
	const { children } = props
	const [height, setHeight] = useState(0);
	const [mobile, setMobile] = useState(false);
	const [scrolllock, setScrolllock] = useState(0);
	const [width, setWidth] = useState(0);

	const sections = [
		'home',
		'about',
		'achievements',
		'portfolio',
		'education',
		'contact',
	]

	var section_id = 0;
    var scrolling = false;

	const updateDimensions = () => {
		if (width !== window.innerWidth) {
			window.location.reload()
		}
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);
		
		if (window.innerWidth < 1025) {
			setScrolllock(false);
			if (window.innerWidth < 992) {
				setMobile(true);
			}
		} else {
			setMobile(false);
			setScrolllock(true);
		}
	}

	const setDefaults = () => {
		window.innerWidth < 992 ? setHeight('auto') : setHeight(window.innerHeight);
		window.innerWidth < 992 ? setMobile(true) : setMobile(false);
		window.innerWidth < 1025 ? setScrolllock(false) : setScrolllock(true);
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		setDefaults();
    	window.addEventListener('resize', updateDimensions);
		return () => {
			window.removeEventListener('resize', updateDimensions)
		}
	})

	const changeSection = (id) => {
		section_id = id
	}

	const wheel = (e) => {
		if (!scrolling && !mobile) {
			scrolling = true;
			if (e.deltaY < 0) {
				if (sections[ (section_id + sections.length - 1) % sections.length ] !== sections[sections.length - 1])
					section_id = (section_id + sections.length - 1) % sections.length
			} else {
				if (section_id !== sections.length - 1)
					section_id = (section_id + 1) % sections.length
			}
			const el = document.getElementById(sections[section_id])
			scrollToElement(el, {
				offset: 0,
				ease: 'in-out-expo',
				duration: 2000,
			}).on('end', () => {
				scrolling = false
			})
		}
	}

	return (
		<ThemeProvider value={{ height: mobile ? 'auto' : height }}>
			<Navigation change={changeSection} />
			<div onWheel={e => wheel(e)}>{children}</div>
			<ScrollLock isActive={scrolllock} />
      	</ThemeProvider>
	)
}

export default Layout
