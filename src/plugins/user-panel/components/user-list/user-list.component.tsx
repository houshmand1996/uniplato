import { UserCard, selectUsers, User } from 'plugins';
import { UserListContainer } from './user-list.styles';
import { useSelector } from 'react-redux';
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';
import { useMedia } from 'core';
import { useEffect, useMemo, useState } from 'react';

export const UserList = () => {
    const users: User[] = useSelector(selectUsers);
    const [columnNumbers, columnNumbersSet] = useState<number[]>([]);

    useEffect(() => {
        console.log('UserList: useEffect');
         if (users.length < 5) {
            columnNumbersSet([2, 1, 1]);
        } else if (users.length < 10) {
            columnNumbersSet([3, 1, 1]);
        } else if (users.length < 13) {
            columnNumbersSet([4, 1, 1]);
        }
    }, [users]);


    const calculateHeight = (users: User[]): number => {
        const userCount = users.length;
        if (userCount < 3) return 1000;
        if (userCount < 5) return 800;
        if (userCount < 7) return 700;
        return 550;
    };

    // Hook1: Tie media queries to the number of columns
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], columnNumbers, 2);
    // Hook2: Measure the width of the container element
    const [ref, { width }] = useMeasure();
    // Hook3: Form a grid of stacked items using width & columns we got from hooks 1 & 2
    const [, gridItems] = useMemo(() => {
        const heights = new Array(columns).fill(0); // Each column gets a height starting with zero
        const gridItems = users.map((child, i) => {
            const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
            const x = (width / columns) * column ; // x = container width / number of columns * column index,
            const y = (heights[column] += calculateHeight(users) / 2) - calculateHeight(users) / 2 ; // y = it's just the height of the current column
            return { ...child, x, y, width: 100 / columns + '%' , height: calculateHeight(users) / 2  };
        });
        return [heights, gridItems];
    }, [columns, users, width]);
    // Hook: Turn the static grid values into animated transitions, any addition, removal or change will be animated
    const transitions = useTransition(gridItems, {
        key: (item: { css: string; height: number }) => item.css,
        from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
        enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
        update: ({ x, y, width, height }) => ({ x, y, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25,
    });
    // Render the grid
    return (
        <UserListContainer data-test="user-list" ref={ref} >
            {transitions((style, item) => {
                console.log({ style, item });
                return (
                    <a.div style={style} data-test="a-div" >
                        <UserCard key={item.id} userId={item.id} />
                    </a.div>
                );
            })}
        </UserListContainer>
    );
};  