import React from 'react'
import { LikeLogo, UnlikeLogo } from '../../assets'

export default function LikeUnlike({ like, unlike }) {
    return (
        <div class="flex gap-10 w-48">
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img
                        class="w-5 block"
                        src={LikeLogo}
                        alt="Like"
                    />
                </div>
                <div
                    class="text-sm leading-[1.7142857] text-slate-600"
                >
                    {like}
                </div>
            </div>
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img
                        class="w-5 block"
                        src={UnlikeLogo}
                        alt="Unlike"
                    />
                </div>
                <div
                    class="text-sm leading-[1.7142857] text-slate-600"
                >
                    {unlike}
                </div>
            </div>
        </div>
    )
}
