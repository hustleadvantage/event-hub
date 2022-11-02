function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const resolveClass =
  (activePath: string, url: string) =>
  ({ active: focus, disabled }: { active: boolean; disabled: boolean }) => {
    return classNames(
      'kai-menu-item',
      activePath === url && 'active',
      focus && 'focus',
      disabled && 'cursor-not-allowed opacity-50'
    );
  };

export const useMenuItem = () => {
  return {
    resolveClass,
  };
};
