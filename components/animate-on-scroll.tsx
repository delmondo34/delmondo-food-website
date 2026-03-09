'use client';

import { useEffect, useRef, ReactNode } from 'react';

type AnimationVariant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';

interface AnimateOnScrollProps {
    children: ReactNode;
    variant?: AnimationVariant;
    delay?: number; // ms cinsinden gecikme
    className?: string;
}

const variantStyles: Record<AnimationVariant, { initial: string; visible: string }> = {
    'fade-up': {
        initial: 'opacity-0 translate-y-10',
        visible: 'opacity-100 translate-y-0',
    },
    'fade-in': {
        initial: 'opacity-0',
        visible: 'opacity-100',
    },
    'fade-left': {
        initial: 'opacity-0 -translate-x-10',
        visible: 'opacity-100 translate-x-0',
    },
    'fade-right': {
        initial: 'opacity-0 translate-x-10',
        visible: 'opacity-100 translate-x-0',
    },
};

export function AnimateOnScroll({
    children,
    variant = 'fade-up',
    delay = 0,
    className = '',
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.remove(...variantStyles[variant].initial.split(' '));
                        el.classList.add(...variantStyles[variant].visible.split(' '));
                    }, delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [variant, delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${variantStyles[variant].initial} ${className}`}
        >
            {children}
        </div>
    );
}
