export const GenreBar = ({name, percentage, index}) => {
    let column = 11
    let color = 'bg-gradient-to-t from-amber-200 to-yellow-500'
    switch(index){
        default:
            column = 11
            color = 'bg-gradient-to-t from-amber-500 to-red-500'
            break;
        case 1:
            column = 13
            color = 'bg-gradient-to-t from-purple-200 to-blue-500'
            break;
        case 2:
            column = 15
            color = 'bg-gradient-to-t from-purple-200 to-blue-500'
            break;
        case 3:
            column = 17
            color = 'bg-gradient-to-t from-blue-200 to-green-500'
            break;
        case 4:
            column = 19
            color = 'bg-gradient-to-t from-blue-200 to-green-500'
            break;
    }
    return (
        <div className={`grid relative row-[3_/_span_7] col-[${column}_/_span_1] z-20`}>
            <div className={'absolute inset-0 z-20 block text-xl'}>
                {/* genre bar*/}
                <div className={'relative h-[50vh] overflow-hidden bg-gray-700 rounded-lg'}>
                    <span className={'h-[7.8vh] flex justify-center items-center transition text-gray-400 font-bold'}> {percentage}% </span>
                    {/*  genre bar level*/}
                    <div style={{height: `${percentage}%`}} className={`absolute right-0 bottom-0 left-0 rounded-lg ${color} origin-bottom`}/>
                </div>
                <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh] '}>
                    {name}
                </h3>
            </div>
        </div>
    );
}