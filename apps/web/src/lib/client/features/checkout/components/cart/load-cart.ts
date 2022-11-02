import { pipe } from 'fp-ts/lib/function';
import type { Action } from 'svelte/action';

type CheckoutWidgetProps = {
  eventId: string;
  onOrderCompleted: any;
};

const getWindowHeight = () => window.innerHeight;

export const loadCart: Action = (
  node,
  { eventId, onOrderCompleted }: CheckoutWidgetProps
) => {
  const onLoad = () => {
    const windowHeight = getWindowHeight();

    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId,
      iframeContainerId: node.id,
      iframeContainerHeight: windowHeight,
      onOrderComplete: onOrderCompleted,
      promoCode: '',
    });
  };

  const createScriptElement = (src: string) => {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', src);
    scriptElement.setAttribute('type', 'text/javascript');

    return scriptElement;
  };

  const attachOnLoadEventListener =
    (onLoad: any) => (element: HTMLScriptElement) => {
      element.addEventListener('load', onLoad);
      return element;
    };

  const addScriptToHead = (element: HTMLScriptElement) =>
    document.head.appendChild(element);

  const scriptUrl = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';

  const resizeCheckout = () => {
    const newWindowHeight = getWindowHeight();
    node.style.height = `${newWindowHeight}px`;
  };

  pipe(
    createScriptElement(scriptUrl),
    attachOnLoadEventListener(onLoad),
    addScriptToHead
  );

  window.addEventListener('resize', resizeCheckout);
};
