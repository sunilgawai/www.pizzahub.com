import { Separator } from '../ui/separator';
import { Card } from '../ui/card';

type OrdersViewProps = {
    title: string;
}
const OrdersView = () => {
    return (
        <div>
            <h2 className='font-semibold text-center text-lg py-[5px]'>Your orders</h2>
            <Separator color='black' />
            <Card className='rounded-none py-2 border-none shadow-none'>
                Your orders
            </Card>
        </div>
    )
}

export default OrdersView;