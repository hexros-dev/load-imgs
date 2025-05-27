// ==UserScript==
// @name        Load Images in STV
// @namespace   Load Images in STV
// @include     http*://*/truyen/*/1/*/*/
// @exclude     http*://*/truyen/*/1/*/0/
// @grant       none
// @version     1.0
// @author      Hexros Raymond
// @icon        https://raw.githubusercontent.com/hexros-dev/load-imgs/master/assets/icons/icon_64.png
// @downloadURL https://raw.githubusercontent.com/hexros-dev/load-imgs/master/userscript.js
// @homepageURL https://github.com/hexros-dev/load-imgs
// @supportURL  https://github.com/hexros-dev/load-imgs/issues
// @description Load image tags when names are added to STV.
// ==/UserScript==

(function() {
    'use strict';

    const allowedHosts = [
        "14.225.254.182",
        "sangtacviet.app",
        "sangtacviet.vip",
        "sangtacviet.com",
        // thêm nếu cần
    ];

    if (!allowedHosts.includes(location.hostname)) {
        return;
    }

    const createDOMElement = (tag, attributes = {}, styles = {}) => {
        const element = document.createElement(tag);
        Object.assign(element, attributes);
        Object.assign(element.style, styles);
        return element;
    };

    const createButton = ({ label, onClick, styles = {} }) => {
        return createDOMElement(
            'button',
            {
                textContent: label,
                onclick: onClick,
            },
            {
                fontSize: '25px',
                lineHeight: '50px',
                outline: 'none',
                borderRadius: '100%',
                height: '50px',
                width: '50px',
                marginBottom: '10px',
                cursor: 'pointer',
                border: '1px solid #ccc',
                backgroundColor: '#f0f0f0',
                transition: 'background-color 0.3s',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...styles,
            },
        );
    };

    const fixContentDisplay = () => {
        document.querySelectorAll('i').forEach((tag) => {
            if (/<img|<span/.test(tag.textContent)) {
                tag.innerHTML = tag.textContent;
            }
        });
    };

    const clickButton = (selector) => {
        document.querySelector(`button[onclick='${selector}']`)?.click();
    };

    const setupControlPanel = () => {
        const controlPanel = createDOMElement(
            'div',
            {},
            {
                position: 'fixed',
                bottom: '100px',
                right: '10px',
                display: 'flex',
                alignItems: 'end',
                flexDirection: 'column',
                zIndex: '1',
                width: '0',
            },
        );

        const buttons = [
            {
                condition: true,
                label: '🔄',
                onClick: () => clickButton('excute()'),
            }
        ];

        buttons.forEach(({ condition, ...props }) => {
            if (condition === true) /*add condition here*/ {
                controlPanel.appendChild(createButton(props));
            }
        });

        document.body.appendChild(controlPanel);
    };

    const init = async () => {
        setupControlPanel();
        fixContentDisplay();
        autoReload()
    };
    const autoReload = () => {
        const actions = [
            "addSuperName('hv','z')",
            "addSuperName('hv','f')",
            "addSuperName('hv','s')",
            "addSuperName('hv','l')",
            "addSuperName('hv','a')",
            "addSuperName('el')",
            "addSuperName('vp')",
            "addSuperName('kn')",
            'saveNS();excute();',
            'excute()',
        ];

        actions.forEach((action) => {
            const button = document.querySelector(`[onclick="${action}"]`);
            if (button) {
                button.addEventListener('click', () => {
                    fixContentDisplay();
                });
            }
        });
    };
    setTimeout(init, 1000);

})();
