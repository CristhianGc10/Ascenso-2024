import { type Node as RFNode, type Edge as RFEdge } from '@xyflow/react';
import {
    makeInputNode,
    makeDefaultNode,
    makeOutputNode,
    makeStraightEdge,
    makeStepEdge,
    makeSmoothEdge,
    makeBezierEdge,
} from './molds';

export const DEMO_NODES: RFNode[] = [
    // INPUT: solo SOURCES abajo
    makeInputNode(
        'A',
        { x: 0, y: 0 },
        {
            justify: true,
            tint: '#fff7ed',
            width: 420,
            content: (
                <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            ),
            bottomColors: ['#ef4444', '#3b82f6', '#f59e0b'], // sources
        }
    ),

    // DEFAULT: targets arriba, sources abajo, laterales (izq targets, der sources)
    makeDefaultNode(
        'B',
        { x: 520, y: 40 },
        {
            tint: '#eef2ff',
            padding: '1rem',
            width: 360,
            content: (
                <svg
                    viewBox="0 0 400 250"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                >
                    <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                            <stop
                                offset="0%"
                                stopOpacity="1"
                                stopColor="#60a5fa"
                            />
                            <stop
                                offset="100%"
                                stopOpacity="1"
                                stopColor="#34d399"
                            />
                        </linearGradient>
                    </defs>
                    <rect
                        x="0"
                        y="0"
                        width="400"
                        height="250"
                        rx="16"
                        fill="url(#grad)"
                    />
                    <g transform="translate(90,50)">
                        <circle
                            cx="40"
                            cy="40"
                            r="40"
                            fill="#ffffff"
                            opacity="0.9"
                        />
                        <rect
                            x="110"
                            y="10"
                            width="160"
                            height="18"
                            rx="6"
                            fill="#ffffff"
                            opacity="0.9"
                        />
                        <rect
                            x="110"
                            y="42"
                            width="140"
                            height="12"
                            rx="6"
                            fill="#ffffff"
                            opacity="0.8"
                        />
                        <rect
                            x="0"
                            y="110"
                            width="270"
                            height="18"
                            rx="6"
                            fill="#ffffff"
                            opacity="0.85"
                        />
                    </g>
                </svg>
            ),
            topColors: ['#22c55e', '#a855f7', '#14b8a6'], // targets
            bottomColors: ['#ef4444', '#3b82f6', '#f59e0b'], // sources
            leftColors: ['#94a3b8', '#22c55e'], // targets
            rightColors: ['#10b981', '#6366f1'], // sources
        }
    ),

    // OUTPUT: solo TARGETS arriba
    makeOutputNode(
        'C',
        { x: 980, y: 0 },
        {
            label: 'C',
            tint: '#fef2f2',
            width: 220,
            topColors: ['#a78bfa', '#22c55e', '#fb923c'], // targets
        }
    ),
];

export const DEMO_EDGES: RFEdge[] = [
    makeStraightEdge('e1', 'A', 'B', '#ef4444', 'straight'),
    makeStepEdge('e2', 'B', 'C', '#3b82f6', 'step'),
    makeSmoothEdge('e3', 'A', 'C', '#f59e0b', 'smoothstep'),
    makeBezierEdge('e4', 'C', 'B', '#10b981', 'bezier'),
];
