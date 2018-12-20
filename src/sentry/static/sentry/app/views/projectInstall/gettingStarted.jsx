import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import ProjectContext from 'app/views/projects/projectContext';
import ProjectDocsContext from 'app/views/projectInstall/docsContext';
import ProjectSelector from 'app/components/projectHeader/projectSelector';
import space from 'app/styles/space';

class GettingStartedBody extends React.Component {
  static contextTypes = {
    project: PropTypes.object,
    organization: PropTypes.object,
  };

  render() {
    let {project, organization} = this.context;
    return (
      <Container>
        <div className="sub-header flex flex-container flex-vertically-centered">
          <div className="p-t-1 p-b-1">
            <ProjectSelector organization={organization} projectId={project.slug} />
          </div>
        </div>
        <div className="container">
          <ProjectDocsContext>
            {React.cloneElement(this.props.children, {
              linkPath: (orgId, projectId, platform) =>
                `/${orgId}/${projectId}/getting-started/${platform}/`,
            })}
          </ProjectDocsContext>
        </div>
      </Container>
    );
  }
}

class GettingStarted extends React.Component {
  render() {
    let {projectId, orgId} = this.props.params;
    return (
      <ProjectContext orgId={orgId} projectId={projectId}>
        <GettingStartedBody>{this.props.children}</GettingStartedBody>
      </ProjectContext>
    );
  }
}

const Container = styled('div')`
  flex: 1;
  background: #fff;
  margin-bottom: -${space(3)};
`;

export default GettingStarted;
