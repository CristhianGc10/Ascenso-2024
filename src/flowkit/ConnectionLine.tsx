import { useConnection } from '@xyflow/react';

type Props = {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
};

export default function ConnectionLine({ fromX, fromY, toX, toY }: Props) {
    const { fromHandle } = useConnection();
    const stroke = (fromHandle?.id as string) || '#8888FF'; // color del handle origen

    return (
        <g>
            <path
                fill="none"
                stroke={stroke}
                strokeWidth={1.5}
                className="animated"
                d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
            />
            <circle
                cx={toX}
                cy={toY}
                r={3}
                fill="#fff"
                stroke={stroke}
                strokeWidth={1.5}
            />
        </g>
    );
}
