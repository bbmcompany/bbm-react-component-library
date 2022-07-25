import { any } from "prop-types";
import {C3Button} from "../Button/Button";
import './pagination.scss'

interface C3PaginationProps {
    count?: number;
    listSize?: number;
    // @ts-ignore
    nextPageFunction?: IntrinsicAttributes & C3PaginationProps

}

export const C3Pagination = ({

                                 count = 0,
                                 listSize=count,
                                 nextPageFunction = any,
                                 ...props


                             }: C3PaginationProps) => {
    let paginationList = Array.from({length:count}, (_i,i) => i + 1);
    let shownList = paginationList;
    let pageNumber = 0;

    if (count < 1) {
        count = 1;
        return null;
    }

    if(listSize < count && listSize > 0) {
            shownList = paginationList.slice(0,listSize);
    }
    if(listSize > count) {
        listSize = count;
    }

    const selectedPage = (currentNumber: number) => {
        pageNumber = currentNumber;
        console.log(pageNumber)
    }

    const nextPage = () => {
       if(pageNumber < count) {
           pageNumber++;
       }
        console.log(pageNumber)
    }

    const previousPage = () => {
        if(pageNumber > 1) {
            pageNumber--;
        }
        console.log(pageNumber)
    }
    return (
        <nav className={'pagination'}>
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
                        <li key={index} className={ 'pagination--page-list'}>
                            <C3Button
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