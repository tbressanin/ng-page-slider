import {
    animate, trigger, transition, style,
    query, animateChild, group, state
} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        state('in', style({ height: '*' })),
        transition('* <=> *', [
            // The query function has three params.
            // First is the event, so this will apply on entering or when the element is added to the DOM.
            // Second is a list of styles or animations to apply.
            // Third we add a config object with optional set to true, this is to signal
            // angular that the animation may not apply as it may or may not be in the DOM.
            // query(
            //     ':enter',
            //     [style({ top: '100%' })],
            //     { optional: true }
            // ),
            query(
                ':leave',
                // here we apply a style and use the animate function to apply the style over 0.3 seconds
                [style({ top: '0%' }), animate('0.3s', style({ top: '100%' }))],
                { optional: true }
            ),
            // query(
            //     ':enter',
            //     [style({ top: '100%' }), animate('0.3s', style({ top: '0%' }))],
            //     { optional: true }
            // )
        ])
    ]);
