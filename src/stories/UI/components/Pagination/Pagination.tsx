import {any} from "prop-types";
import {C3Button} from "../Button/Button";
import './pagination.scss'

interface C3PaginationProps {
    count?: number;
    listSize?: number;
    rounded?: boolean;
    outlined?: boolean;
    nextPageFunction?: () => any;
    previousPageFunction?: () => any;
    selectedPageFunction?: () => any;

}

export const C3Pagination = ({

                                 count = 0,
                                 listSize = count,
                                 nextPageFunction = function () {
                                 },
                                 previousPageFunction = function () {
                                 },
                                 selectedPageFunction = function () {
                                 },
                                 rounded = false,
                                 outlined = false,
                                 ...props


                             }: C3PaginationProps) => {
    let paginationList = Array.from({length: count}, (_i, i) => i + 1);
    let shownList = paginationList;
    let pageNumber = 0;
    let roundedClass = rounded ? 'bbm-rcl-pagination--rounded' : ' ';
    let outlinedClass = outlined ? 'bbm-rcl-pagination--outline' : ' ';
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
        console.log(pageNumber)
        selectedPageFunction();
    }

    const nextPage = () => {
        if (pageNumber < count) {
            pageNumber++;
        }
        nextPageFunction();
        console.log(pageNumber)
    }

    const previousPage = () => {
        if (pageNumber > 1) {
            pageNumber--;
        }
        previousPageFunction();
        console.log(pageNumber)
    }
    return (
        <nav className={'bbm-rcl-pagination'}>
            <ul>
                <li className={'arrow left-arrow'}>
                    <C3Button
                        text
                        iconButton
                        icon={'left-arrow'}
                        onClick={() => previousPage()}
                    />
                </li>
                {shownList.map((pagination, index) => {
                    return (
                        <li key={index} className={'pagination--page-list'}>
                            <C3Button
                                className={[roundedClass,outlinedClass].join('')}
                                text
                                type={'button'}
                                onClick={() => selectedPage(index + 1)}
                            >
                                {pagination.toString()}
                            </C3Button>
                        </li>
                    )
                })}
                <li className={'arrow right-arrow'}>
                    <C3Button

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