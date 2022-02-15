
import React from 'react'

import type { Option, TreeProps } from './typing';

const RenderTree = (options: Array<Option>, deep: number) => {

    const generateSpace = (deep: number) => {
        return '.'.repeat(deep);
    }

    return <>
    {
        options?.map(option => {
            const {label, value, children, display = true, id} = option
            return (
            <div className='flex' key={id}>
            {
                generateSpace(deep)}
                    <div>
                        {display ? <div>
                            {label}
                            {children?.length ? RenderTree(children, deep + 1) : null}
                        </div>
                        : null}
                    </div>
                </div>
            )
        })
    }
    </>
}

const Tree = (props: TreeProps) => {

    return RenderTree(props.options, 0);
}

export default Tree;