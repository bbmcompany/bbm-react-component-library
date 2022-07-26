import {any} from "prop-types";
import React from "react";
import {C3Button} from "../Button/Button";
import './pagination.scss'

interface C3PaginationProps {
    count?: number;
    listSize?: number;
    rounded?: boolean;
    outlined?: boolean;
    disabled?: boolean;
    size?: string;
    nextPageFunction?: () => any;
    previousPageFunction?: () => any;
    selectedPageFunction?: () => any;

}

export const C3Pagination = ({
                                 count = 0,
                                 listSize = count,
                                 size = 'small',
                                 nextPageFunction = function () {
                                 },
                                 previousPageFunction = function () {
                                 },
                                 selectedPageFunction = function () {
                                 },
                                 rounded = false,
                                 outlined = false,
                                 disabled = false,
                                 ...props


                             }: C3PaginationProps) => {

    let paginationList = Array.from({length: count}, (_i, i) => i + 1);
    let shownList = paginationList;
    const [focusClass, setFocusClass] = React.useState(Array.from({length: shownList.length}, (_i, i) => ''));
    let pageNumber = 0;
    const roundedClass = rounded ? 'bbm-rcl-pagination--rounded' : ' ';
    const outlinedClass = outlined ? 'bbm-rcl-pagination--outline' : ' ';
    let variantClasses = '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-pagination--${key}`;
        }
    }

    if (count < 1) {
        count = 1;
        return null;
    }

    if (listSize < count && listSize > 0) {
        shownList = paginationList.slice(0, listSize);
    }
    if (listSize > count) {
        listSize = count;
    }

    const selectedPage = (currentNumber: number) => {
        pageNumber = currentNumber;
        selectedPageFunction();
    }

    const nextPage = () => {
        if (pageNumber < count) {
            pageNumber++;
        }
        nextPageFunction();
    }

    const previousPage = () => {
        if (pageNumber > 1) {
            pageNumber--;
        }
        previousPageFunction();
    }
    return (
        <nav className={'bbm-rcl-pagination'}>
            <ul>
                <li className={'arrow left-arrow'}>
                    <C3Button
                        size={size}
                        text
                        iconButton
                        icon={'left-arrow'}
                        onClick={() => previousPage()}
                    />
                </li>
                {shownList.map((pagination, index) => {
                    return <> {disabled ?
                        <li key={index} className={['pagination--page-list',].join(' ')}>
                            <C3Button
                                size={size}
                                disabled
                                className={[roundedClass, outlinedClass, 'bbm-rcl-button--disabled'].join('')}
                                text
                                type={'button'}
                            >
                                {pagination.toString()}
                            </C3Button>
                        </li>
                        : <li key={index} className={['pagination--page-list', variantClasses].join(' ')}>
                            <C3Button
                                size={size}
                                className={[roundedClass, outlinedClass].join('')}
                                text
                                type={'button'}
                                onClick={() => selectedPage(index + 1)}
                            >
                                {pagination.toString()}
                            </C3Button>
                        </li>}
                    </>

                })}
                <li className={'arrow right-arrow'}>
                    <C3Button
                        size={size}
                        text
                        iconButton
                        icon={'arrow-right'}
                        onClick={() => nextPage()}
                    />
                </li>
            </ul>
        </nav>
    )
}