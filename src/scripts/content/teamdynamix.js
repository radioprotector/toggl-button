'use strict';
/* global togglbutton, $ */

togglbutton.render(
  '.tdx-toggl-container:not(.toggl)',
  { observe: true },
  $container => {
    const descriptionSelector = () => {
      return $container.dataset.itemName || '';
    };

    const projectSelector = () => {
      return $container.dataset.projectName;
    };

    const tagsSelector = () => {
      // Tags are stored as a JSON-serialized array of strings
      return JSON.parse($container.dataset.tags);
    };

    const link = togglbutton.createTimerLink({
      className: 'teamdynamix',
      description: descriptionSelector,
      projectName: projectSelector,
      tags: tagsSelector
    });

    $container.parentElement.appendChild(link);
  }
);
