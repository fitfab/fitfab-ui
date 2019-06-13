import { useCallback, useState } from 'react'

export const useToggle = (initial: boolean): [boolean, (s: boolean) => void] => {
    const [open, setOpen] = useState(initial)
    return [open, useCallback(() => setOpen((status: boolean) => !status), [status])]
}

/**
 * ERROR:
 * [ts] Cannot invoke an expression whose type lacks a call signature.
 * Type 'string | ((item: string) => void)' has no compatible call signatures. [2349]
 */

/**
 * CAUSE:
 * TypeScript inferred the return type as
 * (string | ((item: string) => void))[] which is not right.
 *
 * FIX:
 * so you have to be explecit with the return type of the function
 * (initial: boolean): [boolean, (s: boolean) => void]
 * reference: https://www.slightedgecoder.com/2019/02/10/being-explicit-with-your-own-react-hook-typescript-return-type/
 */
