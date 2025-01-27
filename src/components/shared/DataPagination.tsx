'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink
} from "@/components/ui/pagination"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

interface DataPaginationProps {
    currentPage: number
    pages: number
    setCurrentPage: (currentPage: number) => void
}

export default function DataPagination(props: DataPaginationProps) {
    return (
        <Pagination>
            <PaginationContent>
                {props.currentPage === 1 ? '' : (
                    <PaginationItem key="previous" className="cursor-pointer">
                        <PaginationLink aria-label="Ir para a página anterior" size="default" 
                            onClick={() => props.setCurrentPage(props.currentPage - 1)}>
                            <IconArrowLeft className="h-4 w-4" />
                            <span>Anterior</span>
                        </PaginationLink>
                    </PaginationItem>
                )}

                {(() => {
                    const items = []
                    items.push(
                        <PaginationItem key={1} className="cursor-pointer">
                            <PaginationLink isActive={props.currentPage === 1} 
                                onClick={() => props.setCurrentPage(1)}>
                                1
                            </PaginationLink>
                        </PaginationItem>
                    )

                    if(props.pages > 10 && props.currentPage > 6) {
                        items.push(
                            <PaginationItem key="ellipsis-1">
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    }

                    for(
                        let i = props.currentPage > 5 ? (props.currentPage - 4) : 2; 
                        i <= (props.currentPage < 6 
                            ? (props.pages >= 9 ? 8 : (props.pages - 1)) 
                            : (props.pages >= 11 ? (props.currentPage + (props.pages - props.currentPage - 1)) : 9)); 
                        i++
                    ) {
                        items.push(
                            <PaginationItem key={i} className="cursor-pointer">
                                <PaginationLink isActive={props.currentPage === i} 
                                    onClick={() => props.setCurrentPage(i)}>
                                    {i}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    }
                    
                    if(props.pages > 10 && props.currentPage < props.pages - 5) {
                        items.push(
                            <PaginationItem key="ellipsis-2">
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    }

                    items.push(
                        <PaginationItem key={props.pages} className="cursor-pointer">
                            <PaginationLink isActive={props.currentPage === props.pages} 
                                onClick={() => props.setCurrentPage(props.pages)}>
                                {props.pages}
                            </PaginationLink>
                        </PaginationItem>
                    )

                    return items
                })()}

                {props.currentPage === props.pages ? '' : (
                    <PaginationItem key="next" className="cursor-pointer">
                        <PaginationLink aria-label="Ir para a página seguinte" size="default" 
                            onClick={() => props.setCurrentPage(props.currentPage + 1)}>
                            <span>Próxima</span>
                            <IconArrowRight className="h-4 w-4" />
                        </PaginationLink>
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    )
}