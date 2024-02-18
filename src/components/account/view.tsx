import { Separator } from '../ui/separator';
import { Card } from '../ui/card';
import React, { FC } from 'react';

type ViewProps = {
    title?: string;
    children?: React.ReactNode
}

const View: FC<ViewProps> = ({ title, children }) => {
    return (
        <div>
            <h2 className='font-semibold text-center text-lg py-[5px]'>{title}</h2>
            <Separator color='black' />
            <Card className='rounded-none py-2 border-none shadow-none'>
                {children}
            </Card>
        </div>
    )
}

export default View;